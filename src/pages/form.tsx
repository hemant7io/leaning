import { useState } from "react";
import { FileInput, Button } from "@mantine/core";
import axios from "axios";
function Demo() {
  const [value, setValue]: any = useState();

  const handleUpload = async (e: any) => {
    e.preventDefault(0);
    console.log(e);
    console.log(value);
    console.log(URL.createObjectURL(value));
    axios.post("http://localhost:3000/api/sendmail");
    axios.post(
      "http://localhost:3000/api/upload",
      {
        image: value,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    <form onSubmit={handleUpload}>
      <FileInput
        value={value}
        name="image"
        label="upload image"
        placeholder="upload"
        onChange={setValue}
      />
      <Button aria-label="upload" className="bg-blue-500" type="submit">
        upload
      </Button>
      {/* <img src={ URL.createObjectURL(value)} alt="image" /> */}
    </form>
  );
}

export default Demo;
// import { useState } from "react";
// import { useForm } from "@mantine/form";
// import { Button, FileInput, Text } from "@mantine/core";

// export default function Home() {
//   const form = useForm({
//     initialValues: {
//       image: null,
//     },
//     validate: {
//       image: (value) => {
//         if (!value) {
//           return "Please select an image file";
//         }
//       },
//     },
//   });

//   return (
//     <div style={{ padding: 32 }}>
//       <Text size="xl" weight={700} style={{ marginBottom: 16 }}>
//         Upload an Image
//       </Text>

//       <form
//         onSubmit={form.onSubmit(async (values: any) => {
//           const formData = new FormData();
//           formData.append("image", values.image);

//           try {
//             const res = await fetch("/api/upload", {
//               method: "POST",
//               body: formData,
//             });

//             if (res.ok) {
//               console.log("File uploaded successfully");
//             } else {
//               console.error("Failed to upload file");
//             }
//           } catch (err) {
//             console.error("Failed to upload file:", err);
//           }
//         })}
//       >
//         <FileInput
//           label="Select an image"
//           accept="image/*"
//           files={form.values.image ? [form.values.image] : []}
//           onChange={(event: any) => {
//             form.setFieldValue("image", event.target.files[0]);
//           }}
//           error={form.errors.image}
//         />

//         <Button
//           type="submit"
//           variant="filled"
//           color="indigo"
//           style={{ marginTop: 16 }}
//           className="bg-blue-500"
//         >
//           Upload
//         </Button>
//       </form>
//     </div>
//   );
// }
