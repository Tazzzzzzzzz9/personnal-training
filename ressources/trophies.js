const { trophies } = require.main.require("./models");

module.exports.getAMonth = async ({ body }) => {
  const response = await trophies.findAll({
    where: { month: body.month, user: body.user }
  });
  const dayList = response.map(x => {
    return x.id;
  });
  const minID = Math.min(...dayList);
  let sortedList = response.map(() => {
    return 0;
  });
  response.forEach(element => {
    sortedList[(element.id - minID) / 2] = element;
  });
  return sortedList;
};
module.exports.updateDay = async ({ body }) => {
  await trophies.update(
    { status: body.status, description: body.description },
    {
      where: { id: body.id }
    }
  );
};

module.exports.fillDays = async () => {
  const firstDayUnix = 1577836800000; // 1er Janvier 2020
  let currentDayUnix = firstDayUnix;
  let currentDay = new Date(currentDayUnix);
  while (currentDay.getFullYear() == 2020) {
    await trophies.create({
      user: "her",
      dayNumber: currentDay.getDate(),
      weekDay: currentDay.getDay(),
      month: currentDay.getMonth()
    });
    await trophies.create({
      user: "him",
      dayNumber: currentDay.getDate(),
      weekDay: currentDay.getDay(),
      month: currentDay.getMonth()
    });
    currentDayUnix += 86400000;
    currentDay = new Date(currentDayUnix);
  }
};
