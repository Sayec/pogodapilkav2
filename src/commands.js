/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const WEATHER_COMMAND = {
  name: 'pogoda',
  description: 'sprawdź pogodę',
  options: [
    {
      name: 'location',
      description: 'miejscowość z której chcesz pobrać pogodę',
      required: true,
      type: 3,
    },
  ],
};
