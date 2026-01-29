const GREETING = [
    'Hello world!',
    'All hands on deck!',
    'Carpe diem!',
    'Seize the day!',
    'To infinity and beyond!',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random() * GREETING.length)],
    });
};
