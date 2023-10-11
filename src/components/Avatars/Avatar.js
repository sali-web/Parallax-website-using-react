import React, { useState, useEffect } from "react";
import "./Avatar.css";
import Resizer from "react-image-file-resizer";

const Avatar = ({ src, initials, mode, size }) => {
  const avatarClasses = `custom-avatar ${mode} ${size}`;
  const [resizedImage, setResizedImage] = useState(null);

  const resizeImage = (imageFile, width, height) => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        imageFile,
        width,
        height,
        "jpg", // Use lowercase file extension
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "blob"
      );
    });
  };

  useEffect(() => {
    const fetchResizedImage = async () => {
      if (src) {
        try {
          const imageBlob = await resizeImage(src, 40, 40);
          setResizedImage(URL.createObjectURL(imageBlob));
        } catch (error) {
          console.error("Error resizing image:", error);
        }
      }
    };

    fetchResizedImage();
  }, [src]);

  let content;

  if (size === "small") {
    content = <div className="initials">{initials}</div>;
  } else if (size === "medium" || size === "large") {
    if (resizedImage) {
      content = <img src={resizedImage} alt={initials} />;
    } else {
      content = <div className="initials">{initials}</div>;
    }
  }

  return (
    <div className="avatar-container"> {/* Parent container */}
      <div className={avatarClasses}>{content}</div>
    </div>
  );
};

export default Avatar;
