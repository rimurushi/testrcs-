window.onload = () => {
    const characterImage = document.getElementById('character-image'); // Main character image
    const characterName = document.getElementById('character-name');
    const characterDescription = document.getElementById('character-description');
    const characterCapsules = document.querySelectorAll(".character-capsule");
    console.log(characterCapsules); // This should log the selected elements

    // Define the character data with appropriate image sources
    const characters = {
        aoi: {
            name: "Aoi",
            description: "Aoi is the first character in the world of Ratania. A brave warrior, Aoi's journey begins with...",
            image: "images/characters/aoi.png", // Main character image (middle)
            capsuleImage: "images/capsules/aoi-custom.png" // Capsule image (inside the selector)
        },
        ax: {
            name: "Ax",
            description: "Ax is a fierce warrior with a mysterious past. His quest for redemption leads him to Ratania...",
            image: "images/characters/ax.png",
            capsuleImage: "images/capsules/ax-custom.png"
        },
        ri: {
            name: "Ri",
            description: "Ri is a swift and agile character with unmatched skill in the art of stealth...",
            image: "images/characters/ri.png",
            capsuleImage: "images/capsules/ri-custom.png"
        },
        ace: {
            name: "Ace",
            description: "Ace is a powerful sorcerer with control over elemental forces. His role in Ratania's story is crucial...",
            image: "images/characters/ace.png",
            capsuleImage: "images/capsules/ace-custom.png"
        },
        akai: {
            name: "Akai",
            description: "Akai is a skilled archer and the protector of her village. Her knowledge of nature is unmatched...",
            image: "images/characters/akai.png",
            capsuleImage: "images/capsules/akai-custom.png"
        },
        eir: {
            name: "Eir",
            description: "Eir is a healer who uses magic to mend wounds and protect those in need. Her role in the world of Ratania is vital...",
            image: "images/characters/eir.png",
            capsuleImage: "images/capsules/eir-custom.png"
        },
        kimi: {
            name: "Kimi",
            description: "Kimi is a young and talented inventor, known for creating devices that enhance the abilities of her allies...",
            image: "images/characters/kimi.png",
            capsuleImage: "images/capsules/kimi-custom.png"
        }
    };

  // Function to update character details (name, description, and main image)
function setCharacterDetails(character) {
    console.log("Setting character:", character.name);
    console.log("Character Image:", character.image);  // Log the image source
    console.log("Capsule Image:", character.capsuleImage);  // Log the capsule image source

    // Update the main character details
    characterName.innerText = character.name;
    characterDescription.innerText = character.description;
    characterImage.src = character.image; // Update main character image
    console.log("Updated character image:", characterImage.src); // Log the updated character image source

    // Update the capsule image to reflect the selection
    const capsuleImage = document.querySelector(`#capsule-${character.name.toLowerCase()} img`);
    if (capsuleImage) {
        capsuleImage.src = character.capsuleImage;
        console.log("Updated capsule image:", capsuleImage.src); // Log the updated capsule image source
    } else {
        console.log("Capsule image not found for:", character.name); // Log if the capsule image is not found
    }
}

