"use client";
import { useEffect, useState } from "react";
import AnimatedImage from "../../Image/AnimatedImage";
import { PLATFORM_TYPE } from "@/constans/Constans";
import Link from "next/link";

export const FormButtonApps = () => {
  const [so, setSo] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(ua)) {
      setSo("ios");
    } else if (/android/.test(ua)) {
      setSo("android");
    } else {
      setSo("otro");
    }
  }, []);

  return (
    <div>
      <p className="text-center mt-20 t-outfit">
        ¿Aún no tienes la aplicación?, descargalo en el siguiente link y
        disfruta de tus beneficios
      </p>
      <div className="form-button-apps">
        {(so === PLATFORM_TYPE.ANDROID || so === "otro") && (
          <Link href="https://play.google.com/store/apps/details?id=com.abasotech.meredithcarework&pcampaignid=web_share">
            <AnimatedImage
              src="/google-play.avif"
              alt="Google play"
              styles="img-download-app mrbtnapp"
            />
          </Link>
        )}
        {(so === PLATFORM_TYPE.IOS || so === "otro") && (
          <Link
            href={
              "https://apps.apple.com/mx/app/meredith-aesthetic-work/id6754846887"
            }
          >
            <AnimatedImage
              src="/app-store.avif"
              alt="App Store"
              styles="img-download-app"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default FormButtonApps;
