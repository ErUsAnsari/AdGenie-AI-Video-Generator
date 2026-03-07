import React, { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";
import {
  Loader2Icon,
  RectangleHorizontalIcon,
  RectangleVerticalIcon,
  Wand2Icon,
} from "lucide-react";
import { PrimaryButton } from "../components/Buttons";

const Generator = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "product" | "model",
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      if (type === "product") {
        setProductImage(files[0]);
      } else {
        setModelImage(files[0]);
      }
    }
  };

  const handleGenerate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40">
        <Title
          heading="Create Viral Video Ad"
          description="Upload your product assets to generate high-converting video ads, shorts, and social media posts in seconds."
        />
        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* Left Column */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone
              label="Product Image"
              file={productImage}
              onClear={() => setProductImage(null)}
              onChange={(event) => handleFileChange(event, "product")}
            />
            <UploadZone
              label="Model Image"
              file={modelImage}
              onClear={() => setModelImage(null)}
              onChange={(event) => handleFileChange(event, "model")}
            />
          </div>
          {/* Right Column */}
          <div className="w-full">
            <div className="mb-4 text-gray-300">
              <label htmlFor="name" className="block text-sm mb-4">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name your project"
                required
                className="bg-white/3 rounded-lg w-full border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>
            <div className="mb-4 text-gray-300">
              <label htmlFor="productName" className="block text-sm mb-4">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                placeholder="Enter product name"
                required
                className="bg-white/3 rounded-lg w-full border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>
            <div className="mb-4 text-gray-300">
              <label
                htmlFor="productDescription"
                className="block text-sm mb-4"
              >
                Product Description{" "}
                <span className="text-xs text-violet-400">(optional)</span>
              </label>
              <textarea
                id="productDescription"
                rows={4}
                value={productDescription}
                onChange={(event) => setProductDescription(event.target.value)}
                placeholder="Enter product description"
                className="bg-white/3 rounded-lg w-full border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              />
            </div>
            <div className="mb-4 text-gray-300">
              <label className="block text-sm mb-4">Aspect Ratio</label>
              <div className="flex gap-3">
                <RectangleVerticalIcon
                  onClick={() => setAspectRatio("9:16")}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer ${aspectRatio === "9:16" ? "ring-violet-500/50 bg-white/10" : ""}`}
                />
                <RectangleHorizontalIcon
                  onClick={() => setAspectRatio("16:9")}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer ${aspectRatio === "16:9" ? "ring-violet-500/50 bg-white/10" : ""}`}
                />
              </div>
            </div>
            <div className="mb-4 text-gray-300">
              <label htmlFor="userPrompt" className="block text-sm mb-4">
                User Prompt{" "}
                <span className="text-xs text-violet-400">(optional)</span>
              </label>
              <textarea
                id="userPrompt"
                rows={4}
                value={userPrompt}
                onChange={(event) => setUserPrompt(event.target.value)}
                placeholder="Enter user prompt to guide the generation (e.g. 'Make it look like a summer ad with bright colors')"
                className="bg-white/3 rounded-lg w-full border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <PrimaryButton
            disabled={isGenerating}
            className="px-10 py-3 rounded-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <Loader2Icon className="size-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2Icon className="size-5" />
                Generate Image
              </>
            )}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Generator;
