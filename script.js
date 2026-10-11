/* Configure this with the salon's real WhatsApp number before launch.
   International format only: digits, country code included, no + or spaces.
   The X characters below are an intentionally invalid placeholder. */
const SALON_WHATSAPP_NUMBER = "213XXXXXXXXX";
const WHATSAPP_MESSAGE = "Bonjour, je souhaite avoir des renseignements sur vos prestations et les disponibilités pour un rendez-vous.";
function makeWhatsAppUrl(){if(!/^\d{8,15}$/.test(SALON_WHATSAPP_NUMBER)||SALON_WHATSAPP_NUMBER.includes("X"))return null;return `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;}
document.querySelectorAll(".whatsapp-link").forEach(link=>{const url=makeWhatsAppUrl();if(url){link.href=url;link.target="_blank";link.rel="noopener noreferrer";}else{link.href="#contact";link.addEventListener("click",event=>{event.preventDefault();alert("Site de démonstration : renseignez le vrai numéro WhatsApp dans script.js avant la publication.");});}});
const menuToggle=document.querySelector(".menu-toggle"),siteNav=document.querySelector(".site-nav");
menuToggle.addEventListener("click",()=>{const open=menuToggle.getAttribute("aria-expanded")==="true";menuToggle.setAttribute("aria-expanded",String(!open));menuToggle.setAttribute("aria-label",open?"Ouvrir le menu":"Fermer le menu");siteNav.classList.toggle("open",!open);});
siteNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","Ouvrir le menu");siteNav.classList.remove("open");}));
document.getElementById("year").textContent=new Date().getFullYear();
const lightbox=document.getElementById("lightbox"),lightboxImage=lightbox.querySelector("img"),lightboxClose=lightbox.querySelector(".lightbox-close");let lastFocusedElement=null;
function closeLightbox(){lightbox.hidden=true;lightboxImage.src="";if(lastFocusedElement)lastFocusedElement.focus();}
document.querySelectorAll(".gallery-item").forEach(item=>item.addEventListener("click",()=>{lastFocusedElement=item;lightboxImage.src=item.dataset.full;lightboxImage.alt=item.querySelector("img").alt;lightbox.hidden=false;lightboxClose.focus();}));
lightboxClose.addEventListener("click",closeLightbox);lightbox.addEventListener("click",event=>{if(event.target===lightbox)closeLightbox();});document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!lightbox.hidden)closeLightbox();});
