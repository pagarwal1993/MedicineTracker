using System;

namespace MedicineTracker
{
    public class MedicineDto
    {
        public string Name { get; set; }

        public string Brand { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public string Notes { get; set; }

        public DateTime ExpiryDate { get; set; }
    }
}
