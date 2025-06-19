function showLembaga(tab) {
  document.getElementById("tab-formal").classList.remove("active");
  document.getElementById("tab-nonformal").classList.remove("active");
  document.getElementById("content-formal").style.display = "none";
  document.getElementById("content-nonformal").style.display = "none";
  if (tab === "formal") {
    document.getElementById("tab-formal").classList.add("active");
    document.getElementById("content-formal").style.display = "";
    // Tampilkan slideshow default formal (MTs)
    renderSlideshow("slideshow-mts", slidesData.mts);
  } else {
    document.getElementById("tab-nonformal").classList.add("active");
    document.getElementById("content-nonformal").style.display = "";
    // Tampilkan slideshow default non formal (Kober)
    renderSlideshow("slideshow-kober", slidesData.kober);
  }
}

// Daftar gambar untuk setiap lembaga
const slidesData = {
  kober: [
    "assets/kober/kelas1.JPG",
    "assets/kober/kelas2.JPG",
    "assets/kober/kelas3.JPG",
    "assets/kober/kelas4.JPG",
    "assets/kober/tamanbermain1.JPG",
    "assets/kober/tamanbermain2.JPG",
    "assets/kober/taman_bermain.JPG",
    "assets/kober/taman_bermain1.JPG",
    "assets/kober/teras.JPG",
    "assets/kober/teras1.JPG",
    "assets/kober/teras2.JPG",
    "assets/kober/halamandepan.JPG",
    "assets/kober/visi_misi.JPG",
  ],
  lpk: [
    "assets/lpk/pelatihan1 (1).jpeg",
    "assets/lpk/pelatihan1 (2).jpeg",
    "assets/lpk/piala.JPG",
    "assets/lpk/labkomputer.JPG",
    "assets/lpk/visimisi.JPG",
    "assets/lpk/toilet (1).JPG",
    "assets/lpk/kelas.JPG",
  ],
  ma: [
    "assets/ma/IMG_5152.JPG",
    "assets/ma/IMG_5093.JPG",
    "assets/ma/IMG_5150.JPG",
    "assets/ma/kelas_mts.JPG",
    "assets/ma/IMG_5148.JPG",
    "assets/ma/IMG_5104.JPG",
    "assets/ma/IMG_5154.JPG",
    "assets/ma/kelas.JPG",
    "assets/ma/halaman_depan.JPG",
  ],
  mts: [
    "assets/mts/IMG_5152.JPG",
    "assets/mts/IMG_5093.JPG",
    "assets/mts/IMG_5150.JPG",
    "assets/mts/kelas_mts.JPG",
    "assets/mts/IMG_5148.JPG",
    "assets/mts/IMG_5104.JPG",
    "assets/mts/IMG_5154.JPG",
    "assets/mts/kelas.JPG",
    "assets/mts/halaman_depan.JPG",
  ],
  pkmb: [
    "assets/pkmb/WhatsApp Image 2025-06-18 at 10.19.55 PM.jpeg",
    "assets/pkmb/piala.JPG",
    "assets/pkmb/visi misi.JPG",
    "assets/pkmb/labkomputer.JPG",
    "assets/pkmb/toilet (1).JPG",
    "assets/pkmb/kelas.JPG",
  ],
};

function renderSlideshow(id, images) {
  const container = document.getElementById(id);
  if (!container) return;
  if (!images || images.length === 0) {
    container.innerHTML =
      '<div style="color:#888;text-align:center;">Belum ada foto</div>';
    return;
  }
  let idx = 0;
  function show(idx) {
    container.innerHTML = `
      <div style="position:relative;max-width:350px;margin:0 auto;">
        <img src="${
          images[idx]
        }" alt="slide" style="width:100%;height:220px;object-fit:cover;border-radius:12px;box-shadow:0 2px 12px #0002;" />
        <button class="slide-btn-prev" style="position:absolute;left:0;top:50%;transform:translateY(-50%);background:#0a7a5a;color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:1.2rem;cursor:pointer;">&#10094;</button>
        <button class="slide-btn-next" style="position:absolute;right:0;top:50%;transform:translateY(-50%);background:#0a7a5a;color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:1.2rem;cursor:pointer;">&#10095;</button>
        <div style="position:absolute;right:12px;bottom:8px;background:#fff8;padding:2px 10px;border-radius:8px;font-size:0.95em;">${
          idx + 1
        }/${images.length}</div>
      </div>
    `;
    container.querySelector(".slide-btn-prev").onclick = () => {
      idx = (idx - 1 + images.length) % images.length;
      show(idx);
    };
    container.querySelector(".slide-btn-next").onclick = () => {
      idx = (idx + 1) % images.length;
      show(idx);
    };
  }
  show(idx);
}

// Render slideshow saat tab/lembaga dibuka
const lembagaSlideshowMap = {
  kober: "slideshow-kober",
  lpk: "slideshow-lpk",
  ma: "slideshow-ma",
  mts: "slideshow-mts",
  pkmb: "slideshow-pkmb",
};

function showSekolah(sekolah) {
  document
    .querySelectorAll("#content-formal .lembaga-item-btn")
    .forEach((btn) => btn.classList.remove("active"));
  if (sekolah === "mts") {
    document
      .querySelectorAll("#content-formal .lembaga-item-btn")[0]
      .classList.add("active");
    document.getElementById("detail-mts").style.display = "";
    document.getElementById("detail-ma").style.display = "none";
    renderSlideshow("slideshow-mts", slidesData.mts);
  } else {
    document
      .querySelectorAll("#content-formal .lembaga-item-btn")[1]
      .classList.add("active");
    document.getElementById("detail-mts").style.display = "none";
    document.getElementById("detail-ma").style.display = "";
    renderSlideshow("slideshow-ma", slidesData.ma);
  }
}

function showNonformal(lembaga) {
  document
    .querySelectorAll("#content-nonformal .lembaga-item-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById("detail-kober").style.display = "none";
  document.getElementById("detail-lkp").style.display = "none";
  document.getElementById("detail-pkbm").style.display = "none";
  if (lembaga === "kober") {
    document
      .querySelectorAll("#content-nonformal .lembaga-item-btn")[0]
      .classList.add("active");
    document.getElementById("detail-kober").style.display = "";
    renderSlideshow("slideshow-kober", slidesData.kober);
  } else if (lembaga === "lkp") {
    document
      .querySelectorAll("#content-nonformal .lembaga-item-btn")[1]
      .classList.add("active");
    document.getElementById("detail-lkp").style.display = "";
    renderSlideshow("slideshow-lpk", slidesData.lpk);
  } else {
    document
      .querySelectorAll("#content-nonformal .lembaga-item-btn")[2]
      .classList.add("active");
    document.getElementById("detail-pkbm").style.display = "";
    renderSlideshow("slideshow-pkmb", slidesData.pkmb);
  }
}

// Render slideshow pertama kali
window.addEventListener("DOMContentLoaded", function () {
  renderSlideshow("slideshow-mts", slidesData.mts);
});
