/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import Load from 'public/images/LoadTime.gif'
import Image from 'next/image';


interface LoginButtonProps {
    variant?: "xl" | "s"; // Butonun boyutu için iki seçenek: large veya small
    onClick: () => void; // onClick fonksiyonunun imzasını belirtiyoruz
  }

const LoginButton: React.FC<LoginButtonProps> = ({ variant = "xl", onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true); // Butona tıklandığında loading durumunu true yap
    onClick(); // Dışarıdan gelen onClick fonksiyonunu çağır

    // Örnek olarak, 3 saniye sonra işlem tamamlandı olarak kabul edelim
    setTimeout(() => {
      setLoading(false); // İşlem tamamlandığında loading durumunu false yap
    }, 3000);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-red-700 py-3 text-white hover:bg-red-800 transition rounded-md ${variant === "xl" ? "w-full" : "w-32"} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? (
        <Image src={Load} alt="Loading" className="w-6 h-6 mx-auto" />
      ) : (
        "Login"
      )}
    </button>
  );
};

export default LoginButton;
