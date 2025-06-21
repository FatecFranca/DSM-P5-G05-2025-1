using Android.App;
using Android.Content.PM;
using Microsoft.Maui;

[assembly: Application(UsesCleartextTraffic = true)]
namespace PI5
{
    [Activity(Theme = "@style/Maui.SplashTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.All)]
    public class MainActivity : MauiAppCompatActivity
    {
    }
}