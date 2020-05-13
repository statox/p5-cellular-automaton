function Rules(born, survive) {
    this.born = new Set(born || []);
    this.survive = new Set(survive || []);
}
