// scripts.js

function contactWhatsApp(serialNumber, productImage) {
    const phoneNumber = "919682455696";  // Your phone number with country code +91
    const productImageUrl = `${window.location.origin}/${productImage}`;
    const message = `I'm interested in this product.\nSerial Number: ${serialNumber}\nProduct Image: ${productImageUrl}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function contactEmail(serialNumber, productName, productImage) {
    const emailRecipient = "doworkvikram@gmail.com";  // Your email address
    const subject = `Inquiry about ${productName}`;
    const productImageUrl = `${window.location.origin}/${productImage}`;
    const body = `I'm interested in this product.\nSerial Number: ${serialNumber}\nProduct Image: ${productImageUrl}`;

    const emailUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
}
