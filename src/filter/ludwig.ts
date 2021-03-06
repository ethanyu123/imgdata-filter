import Filter from '../lib';

export const filterLudwig = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
) => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(125, 105, 24, .3)');
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: .25
    });
    Filter.contrast(imgData, {
        amount: 1.05
    });
    Filter.brightness(imgData, {
        amount: 1.05
    });
    Filter.saturate(imgData, {
        amount: 2
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}