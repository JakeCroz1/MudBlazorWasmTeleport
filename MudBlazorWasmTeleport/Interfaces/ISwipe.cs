namespace MudBlazorWasmTeleport.Interfaces
{
    public interface ISwipe
    {
        string JsFunction { get; set; }
        public void RunSwipe(string JsFunc);
    }
}
