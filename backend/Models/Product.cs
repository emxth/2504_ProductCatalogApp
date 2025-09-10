using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Product
    {
        public int Id { get; set; }

        public required string ProductName { get; set; } = string.Empty;

        [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than zero")]
        public decimal Price { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
