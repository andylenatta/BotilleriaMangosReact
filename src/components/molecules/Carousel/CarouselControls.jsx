const CarouselControls = ({ onPrev, onNext }) => (
  <>
    <button
      onClick={onPrev}
      style={{
        position: 'absolute',
        top: '50%',
        left: 10,
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer',
        zIndex: 10,
      }}
    >
      ‹
    </button>
    <button
      onClick={onNext}
      style={{
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer',
        zIndex: 10,
      }}
    >
      ›
    </button>
  </>
)

export default CarouselControls
