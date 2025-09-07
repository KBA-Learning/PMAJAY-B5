```
        const imageBuffer = Buffer.from(result.image, "base64");
                const compressedImage = await sharp(imageBuffer).resize({ width: 300 }).jpeg({ quality: 70 }).toBuffer();

                res.set({
            "Content-Type": "image/png",
             });
            res.send(compressedImage);
```