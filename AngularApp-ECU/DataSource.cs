using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicineTracker
{
    public static class DataSource
    {
        public static List<MedicineDto> medicines = new List<MedicineDto>()
        {
            new MedicineDto
            {
                Name = "Paracetamol",
                Brand = "Cipla",
                Quantity = 40,
                Price = 20.55M,
                ExpiryDate = DateTime.Now.AddYears(1)
            },

            new MedicineDto
            {
                Name = "Paracetamol",
                Brand = "Sun Pharma",
                Quantity = 10,
                Price = 10.55M,
                ExpiryDate = DateTime.Now.AddMonths(4)
            },
            new MedicineDto
            {
                Name = "Paracetamol",
                Brand = "Ranbaxy",
                Quantity = 30,
                Price = 0.55M,
                ExpiryDate = DateTime.Now.AddDays(4)
            },

            new MedicineDto
            {
                Name = "Aspirin",
                Brand = "Ranbaxy",
                Quantity = 5,
                Price = 1.55M,
                ExpiryDate = DateTime.Now.AddDays(90)
            }
        };
    }
}
