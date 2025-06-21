using Microsoft.Maui.Controls;
using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace PI5
{
    public partial class FormPage : ContentPage
    {
        public FormPage()
        {
            InitializeComponent();
        }

        private async void OnSubmitClicked(object sender, EventArgs e)
        {
            var preg = int.TryParse(PregEntry.Text, out var pregVal) ? pregVal : 0;
            var plas = int.TryParse(PlasEntry.Text, out var plasVal) ? plasVal : 0;
            var pres = int.TryParse(PresEntry.Text, out var presVal) ? presVal : 0;
            var skin = int.TryParse(SkinEntry.Text, out var skinVal) ? skinVal : 0;
            var insu = int.TryParse(InsuEntry.Text, out var insuVal) ? insuVal : 0;
            var mass = int.TryParse(MassEntry.Text, out var massVal) ? massVal : 0;
            var pedi = int.TryParse(PediEntry.Text, out var pediVal) ? pediVal : 0;
            var age  = int.TryParse(AgeEntry.Text, out var ageVal) ? ageVal : 0;

            var payload = new
            {
                preg,
                plas,
                pres,
                skin,
                insu,
                mass,
                pedi,
                age
            };

            try
            {
                using var client = new HttpClient();
                var json = JsonSerializer.Serialize(payload);
                var content = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await client.PostAsync("http://10.0.2.2:3000/api/predict", content);

                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    using var doc = JsonDocument.Parse(result);

                    if (doc.RootElement.ValueKind == JsonValueKind.Array && doc.RootElement.GetArrayLength() > 0)
                    {
                        var first = doc.RootElement[0];
                        if (first.TryGetProperty("predicted", out var predValue))
                        {
                            var predicted = predValue.GetInt32();
                            if (predicted == 1)
                                await DisplayAlert("Notificação", "Positivo, você pode ser diabético", "OK");
                            else
                                await DisplayAlert("Notificação", "Negativo, você não é diabético", "OK");
                        }
                    }
                }
                else
                {
                    await DisplayAlert("Erro", $"Código: {response.StatusCode}", "OK");
                }
            }
            catch (Exception ex)
            {
                await DisplayAlert("Erro", ex.Message, "OK");
            }
        }
    }
}