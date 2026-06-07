"""
Auto-crop white/near-white borders from all project images.
Keeps the hero photo untouched (it has no white border).
"""
from PIL import Image
import os

img_dir = r"c:\Users\cpascual\OneDrive - Lãberit\Escritorio\marta\portfolio\public\img\projects"
SKIP = set()  # add filenames to skip if needed


def crop_whitespace(img: Image.Image, threshold: int = 245) -> Image.Image:
    """Crop uniform near-white border from all four sides."""
    img_rgb = img.convert("RGB")
    pixels = img_rgb.load()
    w, h = img_rgb.size

    def is_white_row(y):
        return all(pixels[x, y][0] >= threshold and
                   pixels[x, y][1] >= threshold and
                   pixels[x, y][2] >= threshold for x in range(w))

    def is_white_col(x):
        return all(pixels[x, y][0] >= threshold and
                   pixels[x, y][1] >= threshold and
                   pixels[x, y][2] >= threshold for y in range(h))

    top = 0
    while top < h and is_white_row(top):
        top += 1

    bottom = h - 1
    while bottom > top and is_white_row(bottom):
        bottom -= 1

    left = 0
    while left < w and is_white_col(left):
        left += 1

    right = w - 1
    while right > left and is_white_col(right):
        right -= 1

    # Add a small padding (20px) so it doesn't feel too tight
    pad = 20
    box = (
        max(0, left - pad),
        max(0, top - pad),
        min(w, right + 1 + pad),
        min(h, bottom + 1 + pad),
    )
    return img.crop(box)


for fname in os.listdir(img_dir):
    if fname in SKIP or not fname.endswith(".jpg"):
        continue
    path = os.path.join(img_dir, fname)
    img = Image.open(path)
    orig_size = img.size
    cropped = crop_whitespace(img)
    new_size = cropped.size
    cropped.save(path, "JPEG", quality=85, optimize=True)
    print(f"{fname}: {orig_size} -> {new_size}")

print("DONE")
