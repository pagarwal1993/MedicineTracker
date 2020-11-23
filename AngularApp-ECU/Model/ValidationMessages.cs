namespace MedicineTracker.Model
{
    public class ValidationMessages
    {
        public ValidationMessages(string message, string type)
        {
            this.Message = message;
            this.Type = type;
        }
        public string Message { get; set; }

        public string Type { get; set; }
    }
}
