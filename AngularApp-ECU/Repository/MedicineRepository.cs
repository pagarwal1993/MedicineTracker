using System.Collections.Generic;

namespace MedicineTracker.Repository
{
    public class MedicineRepository : IMedicineRepository
    {
        public void Add(MedicineDto item)
        {
            DataSource.medicines.Add(item);
        }

        public List<MedicineDto> GetAll()
        {
            return DataSource.medicines;
        }

        public void Update(MedicineDto item)
        {
            var data = DataSource.medicines.Find(x => x.Name == item.Name);
            if (data != null)
                data.Notes = item.Notes;
        }
    }
}
