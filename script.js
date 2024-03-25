const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

//asynchronous function.Prompt to select media stream, pass to video element then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //catch error here
    console.log("woops, error here:", error);
  }
};
button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset button if request is successful
  button.disabled = false;
});
//on load
selectMediaStream();
