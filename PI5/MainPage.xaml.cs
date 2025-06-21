using Microsoft.Maui.Controls;
using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace PI5
{
    public class LoginResult
    {
        public bool Success { get; set; }
        public string ErrorMessage { get; set; }
    }

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();
    }

        private async void OnLoginButtonClicked(object sender, EventArgs e)
        {
            if (Application.Current.Dispatcher.IsDispatchRequired)
            {
                await Application.Current.Dispatcher.DispatchAsync(async () =>
                {
                    await HandleLoginAsync();
                });
            }
            else
            {
                await HandleLoginAsync();
            }
        }

        private async Task HandleLoginAsync()
        {
            var email = EmailEntry?.Text;
            var senha = SenhaEntry?.Text;

            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(senha))
            {
                await DisplayAlert("Erro", "Email e senha são obrigatórios", "OK");
                return;
            }

            LoginButton.IsEnabled = false;
            LoadingIndicator.IsRunning = true;
            LoadingIndicator.IsVisible = true;

            var result = await Login(email, senha);

            if (result.Success)
            {
                Application.Current!.MainPage = new MenuPrincipal();
            }
            else
            {
                await DisplayAlert("Erro de Login", result.ErrorMessage, "OK");

                LoginButton.IsEnabled = true;
                LoadingIndicator.IsRunning = false;
                LoadingIndicator.IsVisible = false;
            }
        }

        private async Task<LoginResult> Login(string email, string senha)
    {
            try
        {
                using (var client = new HttpClient())
                {
                    client.Timeout = TimeSpan.FromSeconds(30);
                    var user = new { email, senha };
                    var json = JsonSerializer.Serialize(user);
                    var content = new StringContent(json, Encoding.UTF8, "application/json");

                    var baseUrl = DeviceInfo.Platform == DevicePlatform.Android
                                    ? "http://10.0.2.2:3000/api/users/login"
                                    : "http://localhost:3000/api/users/login";

                    var response = await client.PostAsync($"{baseUrl}", content);

                    if (response.IsSuccessStatusCode)
                    {
                        return new LoginResult { Success = true };
                    }
                    else
                    {
                        var errorContent = await response.Content.ReadAsStringAsync();
                        return new LoginResult { Success = false, ErrorMessage = string.IsNullOrEmpty(errorContent) ? response.ReasonPhrase : errorContent };
                    }
                }
            }
            catch (Exception ex)
            {
                return new LoginResult { Success = false, ErrorMessage = ex.Message };
            }
        }
    }
}