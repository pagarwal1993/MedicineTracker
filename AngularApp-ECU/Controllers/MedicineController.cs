using MedicineTracker.Model;
using MedicineTracker.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MedicineTracker.Controllers
{
    [Route("api/[controller]")]
    public class MedicineController : Controller
    {
        private readonly IMedicineRepository repo;
        public MedicineController(IMedicineRepository repo)
        {
            this.repo = repo;
        }

        [HttpPost("[action]")]
        public JsonResult AddMedicine([FromBody] Medicine data)
        {
            ValidateMedicineData(data);
            if (!data.ValidationMessages.Any(x => x.Type == "Error"))
            {
                repo.Add(new MedicineDto
                {
                    Brand = data.Brand,
                    ExpiryDate = data.ExpiryDate,
                    Name = data.Name,
                    Notes = data.Notes,
                    Price = data.Price,
                    Quantity = data.Quantity
                });
            }

            return new JsonResult(data);
        }

        [HttpPut("[action]")]
        public JsonResult UpdateNotes([FromBody] Medicine data)
        {
            repo.Update(new MedicineDto
            {
                Brand = data.Brand,
                ExpiryDate = data.ExpiryDate,
                Name = data.Name,
                Notes = data.Notes,
                Price = data.Price,
                Quantity = data.Quantity
            });

            return new JsonResult(data);
        }

        [HttpGet("[action]")]
        public List<Medicine> GetMedicines()
        {
            var data = repo.GetAll();

            return data.Select(x => new Medicine
            {
                Name = x.Name,
                Quantity = x.Quantity,
                Price = x.Price,
                Notes = x.Notes,
                ExpiryDate = x.ExpiryDate,
                Brand = x.Brand
            }).ToList();
        }

        private void ValidateMedicineData(Medicine item)
        {
            if (DateTime.Now.AddDays(15) > item.ExpiryDate)
                item.ValidationMessages.Add(new ValidationMessages("Expiry Date is less than 15 days", "Error"));

            if (DateTime.Now.AddDays(30) > item.ExpiryDate)
                item.ValidationMessages.Add(new ValidationMessages("Expiry Date is less than 30 days", "Warning"));
        }
    }
}
