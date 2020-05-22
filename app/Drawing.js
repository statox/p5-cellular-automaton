const drawCell = () => { 
    if (!settings.drawing) {
        return;
    }

    if (mouseX < 0 || mouseX > D || mouseY < 0 || mouseY > D) {
        return;
    }

    const index = XYToIndex({x: mouseX, y: mouseY});

    if (index === undefined) {
        return;
    }

    const cell = cells[index];
    if (settings.drawingTool === 'PENCIL' && !cell.isAlive()) {
        // Little hack to handle drawing while paused or while running
        cell.born(iterationCpt);
        cell.born(iterationCpt+1);
        resetLoopDetection();
    }
    if (settings.drawingTool === 'ERASER' && cell.isAlive()) {
        // Little hack to handle erasing while paused or while running
        cell.die(iterationCpt);
        cell.die(iterationCpt+1);
        resetLoopDetection();
    }
} 
