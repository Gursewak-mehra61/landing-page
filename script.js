
  const playBtn = document.getElementById("playBtn");
  const thumbnail = document.getElementById("thumbnail");
  const container = document.getElementById("videoContainer");

  playBtn.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1";
    iframe.width = "100%";
    iframe.height = "450";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    // Clear thumbnail & play button
    container.innerHTML = "";
    container.appendChild(iframe);
  });

