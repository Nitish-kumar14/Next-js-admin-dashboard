import styles from "@/app/ui/dashboard/products/addProducts/addProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form  className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="genera"> Choose a Category </option>
          <option value="Kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="des"
          id="des"
          cols="30"
          rows="10"
          placeholder="description"
        ></textarea>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
