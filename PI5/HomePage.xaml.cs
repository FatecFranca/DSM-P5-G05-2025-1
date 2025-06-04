using Microsoft.Maui.Controls;
using System.Windows.Input;

namespace PI5;

public partial class HomePage : ContentPage
{
    public ICommand NavigateToFormCommand { get; }

    public HomePage()
    {
        InitializeComponent();
    }
}