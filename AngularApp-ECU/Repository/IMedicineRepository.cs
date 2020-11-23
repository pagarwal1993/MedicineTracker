using System.Collections.Generic;

namespace MedicineTracker.Repository
{
    public interface IMedicineRepository
    {
        List<MedicineDto> GetAll();
        void Add(MedicineDto item);
        void Update(MedicineDto item);
    }
}
