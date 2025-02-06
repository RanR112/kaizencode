const contact = '6281255802706';
const URL = `https://wa.me/${contact}?text=`;

export const submit = (selectedPricing, formData) => {
    const { name, whatsapp, company, business, notes } = formData;

    const message = `
Halo, saya ingin memesan website dengan rincian berikut:

*Paket*: ${selectedPricing.title}
*Harga*: ${selectedPricing.price} (${selectedPricing.times})

*Data Pemesanan*:
Nama: ${name}
WhatsApp: ${whatsapp}
Perusahaan: ${company}
Jenis Usaha: ${business}
Catatan: ${notes || '-'}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    return URL + encodedMessage;
};

export const consultation = () => {
    const consultationMessage = "Halo, saya tertarik untuk berkonsultasi mengenai pembuatan website. Bisa kita diskusikan lebih lanjut?";
    const encodedMessage = encodeURIComponent(consultationMessage);
    return URL + encodedMessage;
};
