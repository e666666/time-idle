function getAutoTickSlowdown() {
  return Decimal.max(new Decimal(5), getHardwareEffect("MOBO"))
}

function autoTickUnlocked() {
  return getTULevel(1).gt(0) || getHardwareTier("MOBO") > 0
}

function runAuto() {
  if (autoTickUnlocked() && player.tickTimeSpent.minus(tickReq()).gte(getAutoTickSlowdown())) reset(1)
  if (getHardwareTier("MOBO") >= 3) {
    for (let i = 0; i < tickUpgrades.length; i++) {
      buyTickUpgrade(i)
    }
  }
}