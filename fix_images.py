"""
1. Re-extraer páginas de Edifica recortando el header/footer de Salamandra
2. Extraer páginas reales de proyectos del portfolio (merchandising, etc.)
3. Convertir hero PNG a JPG correctamente
"""
import fitz
import os
from PIL import Image

base = r"c:\Users\cpascual\OneDrive - Lãberit\Escritorio\marta"
out_dir = r"c:\Users\cpascual\OneDrive - Lãberit\Escritorio\marta\portfolio\public\img\projects"
portfolio_pdf = os.path.join(base, "portfolio_MartaGea (2).pdf")
edifica_pdf = os.path.join(base, "INDD_Edifica_Salamandra_Interiorismo_01.pdf")

matrix = fitz.Matrix(2.0, 2.0)

# ─────────────────────────────────────────
# EDIFICA: recortar header Salamandra (arriba ~7%) + footer título (~13%)
# ─────────────────────────────────────────
edifica_pages = {
    "edifica-planta-actual":      5,
    "edifica-planta-propuesta":   7,
    "edifica-planta-propuesta-2": 8,
    "edifica-demoliciones":       9,
    "edifica-electricidad":       11,
    "edifica-alzado-fachada":     12,
    "edifica-alzado-juntas":      13,
    "edifica-alzado-despacho":    14,
    "edifica-mostrador":          16,
    "edifica-inspiracion":        18,
    "edifica-inspiracion-2":      19,
    "edifica-materialidad":       21,
    "edifica-moodboard-estar":    23,
    "edifica-moodboard-juntas":   25,
    "edifica-moodboard-despacho": 27,
    "edifica-sillas":             29,
    "edifica-iluminacion":        35,
    "edifica-sanitarios":         36,
    "edifica-infografia-1":       38,
    "edifica-infografia-2":       39,
}

doc_e = fitz.open(edifica_pdf)
for name, page_idx in edifica_pages.items():
    page = doc_e[page_idx]
    pix = page.get_pixmap(matrix=matrix)
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    w, h = img.size
    # Recortar: quitar header arriba (~7%) y footer abajo (~14%)
    top    = int(h * 0.07)
    bottom = int(h * 0.86)
    cropped = img.crop((0, top, w, bottom))
    dst = os.path.join(out_dir, f"{name}.jpg")
    cropped.save(dst, "JPEG", quality=87, optimize=True)
    print(f"edifica {name}: {img.size} -> {cropped.size}")

# ─────────────────────────────────────────
# PORTFOLIO (producto/grafico): extraer páginas de CONTENIDO real
# ─────────────────────────────────────────
# Estas son las páginas con el render/producto real, no los slides header
portfolio_pages = {
    "silla-thonet":       4,   # render silla
    "altavoz-exploded":   6,   # render altavoz
    "grifo-variantes":    8,   # tres grifos
    "grifo-render":       9,   # grifo en baño
    "grifo-detalle":      10,  # detalle grifo
    "reloj-maserati":     15,  # render reloj
    "trofeo-valencia":    20,  # render trofeo
    "merchandising-upv":  26,  # CONTENIDO real merchandising (pagina siguiente al header)
    "metamorfosis":       30,  # mockup libro
}

doc_p = fitz.open(portfolio_pdf)
total = len(doc_p)
for name, page_idx in portfolio_pages.items():
    if page_idx >= total:
        print(f"SKIP {name}: page {page_idx} out of {total}")
        continue
    page = doc_p[page_idx]
    pix = page.get_pixmap(matrix=matrix)
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    dst = os.path.join(out_dir, f"{name}.jpg")
    img.save(dst, "JPEG", quality=87, optimize=True)
    print(f"portfolio {name}: {img.size}")

# ─────────────────────────────────────────
# HERO: copiar PNG -> JPG de alta calidad
# ─────────────────────────────────────────
hero_src = r"C:\Users\cpascual\.cursor\projects\c-Users-cpascual-OneDrive-L-berit-Escritorio-marta\assets\c__Users_cpascual_AppData_Roaming_Cursor_User_workspaceStorage_e01aad769adca355c7d54620e9e30bbf_images_image-7bdc5eb5-2e58-4ace-8a53-32177f30ea0b.png"
hero_dst = r"c:\Users\cpascual\OneDrive - Lãberit\Escritorio\marta\portfolio\public\img\marta-hero.jpg"
hero = Image.open(hero_src).convert("RGB")
hero.save(hero_dst, "JPEG", quality=90, optimize=True)
print(f"hero: {hero.size} -> {os.path.getsize(hero_dst)//1024} KB")

print("\nDONE")
