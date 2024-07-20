$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // Responsive Navbar Toggle
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Form Submit dari Github
const scriptURL = "https://script.google.com/macros/s/AKfycbxh5JpRCtm-jhMKMul7Je75taB0oxkHZ5yhtUgYA5qH8AbTv5ZsBMLyztdE0yPRjCc8/exec";
const form = document.forms["portfolio-kontak"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const myAlertFailed = document.querySelector(".my-alert-failed");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim dan alert, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      // Reset Form
      form.reset();
      console.log("Berhasil kirim masukan!", response);
    })
    .catch((error) => {
      // Tampilkan tombol kirim dan alert, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlertFailed.classList.toggle("d-none");
      // Reset Form
      form.reset();
      console.error("Error!", error.message)
    });
});

// Modal
const vidSection = document.getElementById("video");
const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");

const closeVid = () => {
  vidSection.classList.add("d-none");
  vid1.classList.add("d-none");
  vid2.classList.add("d-none");
  vid3.classList.add("d-none");
}
const openVid1 = () => {
  closeVid();
  vidSection.classList.remove("d-none");
  vid1.classList.remove("d-none");
  vid2.autoplay = true;
}
const openVid2 = () => {
  closeVid();
  vidSection.classList.remove("d-none");
  vid2.classList.remove("d-none");
  vid2.autoplay = true;
}
const openVid3 = () => {
  closeVid();
  vidSection.classList.remove("d-none");
  vid3.classList.remove("d-none");
  vid3.autoplay = true;
}