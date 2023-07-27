import React from "react";
import { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import useProduct from "../hooks/useProduct";

export default function NewProducts() {
  const [product, setProduct] = useState({});

  const [file, setFile] = useState();
  // console.log(product)

  const [isUploadging, setIsUploading] = useState(false);

  const [success, setSuccess] = useState();

  const { addProducts } = useProduct();
  //   const addProduct = useMutation(
  //     ({ product, url }) => addNewProduct(product, url),
  //     {
  //       onSuccess: () => queryClient.invalidateQueries(["products"]),
  //     }
  //   );
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProducts.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("성공적으로 제품이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
              setFile("");
              setProduct("");
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    // console.log('타겟',event.target.files)
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section className="flex h-full ">
      <div className="flex flex-col w-full items-center gap-7">
        <h1 className="italic font-bold underline text-xl my-4">
          새로운 제품 등록
        </h1>
        <div className="w-full flex flex-col items-center gap-7">
          {file && (
            <img
              className="w-96"
              src={URL.createObjectURL(file)}
              alt="미리보기이미지"
            />
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-2/3">
            <input
              className="border-black w-full border border-slate-400 h-10 w-2/4 border-0"
              type="file"
              accept="image/*"
              name="file"
              required
              onChange={handleChange}
            />
            <input
              className="border-black w-full border border-slate-400 h-10"
              type="text"
              name="title"
              placeholder="제품명"
              required
              value={product.title ?? ""}
              onChange={handleChange}
            />
            <input
              className="border-black w-full border border-slate-400 h-10"
              type="number"
              name="price"
              value={product.price ?? ""}
              placeholder="가격"
              onChange={handleChange}
              required
            />
            <input
              className="border-black w-full border border-slate-400 h-10"
              type="text"
              value={product.category ?? ""}
              name="category"
              placeholder="카테고리"
              onChange={handleChange}
              required
            />
            <input
              className="border-black w-full border border-slate-400 h-10"
              type="text"
              name="description"
              value={product.description ?? ""}
              onChange={handleChange}
              placeholder="제품 설명"
              required
            />
            <input
              className="border-black w-full border border-slate-400 h-10"
              type="text"
              name="options"
              value={product.options ?? ""}
              required
              onChange={handleChange}
              placeholder="옵션들(콤마(,)로 구분)"
            />
            {success && (
              <p className="my-2 italic font-bold underline">✅{success}</p>
            )}
            <Button
              text={isUploadging ? "업로드중..." : "제품 등록하기"}
              disabled={isUploadging}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
