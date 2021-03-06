import Filter from '../lib';

export const filterAden = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
) => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(1, 'rgba(125, 105, 24, .1)');

    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    Filter.sepia(imgData, {
        amount: 0.2
    });
    Filter.brightness(imgData, {
        amount: 1.15
    });
    Filter.saturate(imgData, {
        amount: 1.4
    });

    context.putImageData(imgData, 0, 0);

    return imgData;
}