import type { RepresentationPreference } from '../../ldp/representation/RepresentationPreference';
import type { RepresentationPreferences } from '../../ldp/representation/RepresentationPreferences';
import { UnsupportedHttpError } from '../../util/errors/UnsupportedHttpError';
import { matchingMediaType } from '../../util/Util';
import type { RepresentationConverterArgs } from './RepresentationConverter';

/**
 * Filters out the media types from the preferred types that correspond to one of the supported types.
 * @param preferences - Preferences for output type.
 * @param supported - Types supported by the parser.
 *
 * @throws UnsupportedHttpError
 * If the type preferences are undefined.
 *
 * @returns The weighted and filtered list of supported types.
 */
export const matchingTypes = (preferences: RepresentationPreferences, supported: string[]):
RepresentationPreference[] => {
  if (!Array.isArray(preferences.type)) {
    throw new UnsupportedHttpError('Output type required for conversion.');
  }

  // Map all supported types to their corresponding weight
  const weightedSupported = supported.map((type): RepresentationPreference => {
    let weight = 0;
    for (const preference of preferences.type!) {
      if (matchingMediaType(type, preference.value)) {
        // Never accept anything with weight 0
        if (preference.weight === 0) {
          return { value: type, weight: 0 };
        }
        weight = Math.max(weight, preference.weight);
      }
    }
    return { value: type, weight };
  });

  return weightedSupported.filter((preference): boolean => preference.weight > 0);
};

/**
 * Runs some standard checks on the input request:
 *  - Checks if there is a content type for the input.
 *  - Checks if the input type is supported by the parser.
 *  - Checks if the parser can produce one of the preferred output types.
 * @param request - Incoming arguments.
 * @param supportedIn - Media types that can be parsed by the converter.
 * @param supportedOut - Media types that can be produced by the converter.
 */
export const checkRequest = (request: RepresentationConverterArgs, supportedIn: string[], supportedOut: string[]):
void => {
  const inType = request.representation.metadata.contentType;
  if (!inType) {
    throw new UnsupportedHttpError('Input type required for conversion.');
  }
  if (!supportedIn.some((type): boolean => matchingMediaType(inType, type))) {
    throw new UnsupportedHttpError(`Can only convert from ${supportedIn} to ${supportedOut}.`);
  }
  if (matchingTypes(request.preferences, supportedOut).length <= 0) {
    throw new UnsupportedHttpError(`Can only convert from ${supportedIn} to ${supportedOut}.`);
  }
};
