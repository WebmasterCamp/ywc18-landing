export const preloadImages = (images) => {
  if (!Array.isArray(images)) {
    return
  }
  for (let i = 0; i < images.length; i++) {
    const img = new Image()
    img.src = images[i]
  }
}
