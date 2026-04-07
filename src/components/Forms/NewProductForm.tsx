import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import ErrorText from "../ErrorText";
import ProductService from "@/api/products";
import { useMutation } from "@tanstack/react-query";

const newProductSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
});

type NewProductFormData = z.infer<typeof newProductSchema>;

interface NewProductFormProps {
  onClose: () => void;
}

const NewProductForm = ({ onClose }: NewProductFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductFormData>({
    resolver: zodResolver(newProductSchema),
  });

  const { createProduct } = ProductService();
  const { mutate: createProductMutate } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      onClose();
    },
  });

  const onSubmit = (data: NewProductFormData) => {
    createProductMutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="name">Product Name</label>
        <Input id="name" {...register("name")} />
        {errors.name && <ErrorText text={errors.name.message} />}
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <Textarea id="description" {...register("description")} />
        {errors.description && <ErrorText text={errors.description.message} />}
      </div>
      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <Input
          type="number"
          id="price"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && <ErrorText text={errors.price.message} />}
      </div>
      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default NewProductForm;
