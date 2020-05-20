const drawCell = () => { 
    const index = XYToIndex({x: mouseX, y: mouseY});

    if (index === undefined) {
        return;
    }

    const cell = cells[index];
    if (settings.drawingTool === 'PENCIL' && !cell.isAlive) {
        cell.born();
        resetLoopDetection();
    }
    if (settings.drawingTool === 'ERASER' && cell.isAlive) {
        cell.die();
        resetLoopDetection();
    }
} 
