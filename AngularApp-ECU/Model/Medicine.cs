using System;
using System.Collections.Generic;

namespace MedicineTracker.Model
{
    public class Medicine
    {
        public Medicine()
        {
            ValidationMessages = new List<ValidationMessages>();
        }
        public string Name { get; set; }

        public string Brand { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public string Notes { get; set; }

        public DateTime ExpiryDate { get; set; }

        public bool IsExpiryThresholdReached
        {
            get { return DateTime.Now.AddDays(30) >= ExpiryDate; }
        }

        public string WarningMessage { get; set; }

        public List<ValidationMessages> ValidationMessages { get; set; }
    }
}
