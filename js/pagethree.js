// JavaScript
function changeImage() {
    // get all the image tags in the grid
    const images = document.querySelectorAll('#image-grid img');
  
    // loop through each image and change the source attribute
    images.forEach(image => {
      // get the current source attribute
      let src = image.getAttribute('src');
  
      // change the image source based on the current source
      switch (src) {
        case '../images/rock.png':
          image.setAttribute('src', '../images/paper.webp');
          break;
        case '../images/paper.webp':
          image.setAttribute('src', '../images/scissors.png');
          break;
        case '../images/scissors.png':
          image.setAttribute('src', '../images/rock.png');
          break;
        default:
          break;
      }
    });
  }
  