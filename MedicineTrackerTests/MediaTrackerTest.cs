using NUnit.Framework;
using NSubstitute;
using MedicineTracker.Repository;
using MedicineTracker.Controllers;
using MedicineTracker.Model;
using System;
using MedicineTracker;

namespace MedicineTrackerTests
{
    [TestFixture]
    public class MediaTrackerTest
    {
        private MedicineController target;
        private IMedicineRepository repo;
        [SetUp]
        public void Setup()
        {
            repo = Substitute.For<IMedicineRepository>();
            target = new MedicineController(repo);
        }

        [Test]
        public void Should_throw_error_when_expiry_date_is_less_than_15_days()
        {
            try
            {
                target.AddMedicine(new Medicine { ExpiryDate = DateTime.Now });
                Assert.Fail("Exception not thrown");
            }
            catch(Exception x)
            {
                Assert.AreSame("Expiry Date is less than 15 days", x.Message);
            }
        }

        [Test]
        public void Should_add_warning_when_expiry_date_is_less_than_30_days()
        {
               var response = target.AddMedicine(new Medicine { ExpiryDate = DateTime.Now.AddDays(20) });
            var data = response.Value as Medicine;
                Assert.AreSame("Expiry Date is less than 30 days", data.WarningMessage);
        }

        [Test]
        public void Should_add_data_for_new_medicine()
        {
            var isItemAdded = false;
            repo.When(x => x.Add(Arg.Any<MedicineDto>())).Do(x => isItemAdded = true);
            var response = target.AddMedicine(new Medicine { ExpiryDate = DateTime.Now.AddDays(60) });
            Assert.IsTrue(isItemAdded);
        }
    }
}