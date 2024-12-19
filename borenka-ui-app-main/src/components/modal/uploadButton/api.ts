export const uploadToDrive = async (formData: FormData): Promise<boolean> => {
  const response = await fetch("https://borenka.vip/upload-drive", {
    method: "POST",
    body: formData,
  });

  return response.ok;
};
