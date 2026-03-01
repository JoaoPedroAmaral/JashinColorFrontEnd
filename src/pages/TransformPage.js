import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";

export default function TransformPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };
  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100vh-280px)] flex flex-col items-center pt-[80px] p-10 m-auto">
        <h1 className="text-brandPink font-chango m-0 p-0">
          Transforme Imagem em Desenho
        </h1>
        <p className="m-0 p-0 text-justify font-chango mt-2">
          Envie uma foto e veja a mágica acontecer!
        </p>

        <label
          className="bg-[#f0f0f0] border-4 border-dashed border-[#ccc] p-[50px] w-full max-w-[700px] shadow-[0_0_10px_rgba(0,0,0,0.1)] text-center transition-all duration-300 font-chango hover:border-[#0f3258] cursor-pointer relative mt-8"
          htmlFor="fileInput"
        >
          <div className="coisas">Escolher imagem</div>

          {selectedFiles.length > 0 && (
            <div id="imagePreviewContainer" className="mt-5">
              <p>Imagens selecionadas: {selectedFiles.length}</p>
              <div
                id="previewList"
                className="flex flex-wrap gap-4 justify-center mt-4"
              >
                {selectedFiles.map((fileData, index) => (
                  <div key={index} className="relative w-[100px] h-[100px]">
                    <img
                      src={fileData.preview}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFile(index);
                      }}
                      className="absolute -top-2 -right-2 bg-red-600 text-white border-none rounded-full w-6 h-6 cursor-pointer font-bold flex items-center justify-center p-0"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </label>

        <input
          className="hidden"
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <button
          className="bg-brandPink text-white font-sans border-none py-3 px-6 rounded cursor-pointer text-base font-bold no-underline inline-block hover:bg-brandPinkDark mt-8"
          id="transformButton"
        >
          Transformar Imagem
        </button>
      </div>
      <Footer />
      <ArrowNavButton />
    </>
  );
}
