/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

telegram:
https://t.me/share/url?url=postUrl&text=postTitle

oppure:
https://telegram.me/share/url?url=

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const instagramBtn = document.querySelector(".instagram-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {

    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Ehy! visita Logicamente per questa fantastica lezione!");

    facebookBtn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${postUrl}`);

    twitterBtn.setAttribute("href",`https://twitter.com/share?url=${postUrl}&text=${postTitle}`);

    instagramBtn.setAttribute("href",'https://instagram.com/###?ref=badge');

    whatsappBtn.setAttribute("href",`https://wa.me/?text=${postTitle} ${postUrl}`);
 
}

init();