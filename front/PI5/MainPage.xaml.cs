using Microsoft.Maui.Controls;

namespace PI5;

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();
    }

    private void OnLoginButtonClicked(object sender, EventArgs e)
    {
        if (Application.Current?.MainPage != null)
        {
            Application.Current.MainPage = new MenuPrincipal();


        }
    }
}