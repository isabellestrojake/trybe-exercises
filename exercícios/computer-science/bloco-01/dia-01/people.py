import area


PEOPLE_PER_SQUARE_METER = 2
FIELD_LENGTH = 60
FIELD_WIDTH = 45
people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)
if __name__ == "__main__":
    print("Estão presentes no concerto aproximadamente", people_at_concert, "pessoas.")