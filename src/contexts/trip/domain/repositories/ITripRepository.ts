import { Trip } from '../entities/Trip'

/**
 * Repository interface — defined in the domain layer.
 * The domain declares what it needs; infrastructure provides the implementation.
 * This is the Dependency Inversion Principle applied to data access.
 */
export interface ITripRepository {
  getTrip(): Trip
}
