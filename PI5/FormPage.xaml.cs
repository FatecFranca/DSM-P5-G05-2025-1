using Microsoft.Maui.Controls;

namespace PI5
{
    public partial class FormPage : ContentPage
    {
        public FormPage()
        {
            InitializeComponent();
        }

        private void OnSubmitClicked(object sender, EventArgs e)
        {
            DisplayAlert("Formul�rio", "Dados enviados com sucesso!", "OK");
        }
    }
}