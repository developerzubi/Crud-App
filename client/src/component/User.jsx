
const User = ({ formTitle, buttonText, fields,onInputChange,onSubmit  }) => {
    return (
        <div className="w-3/12 bg-white rounded-xl shadow-2xl my-14 mx-auto p-14">
            <form onSubmit={onSubmit}>
                <h2 className="text-2xl font-bold mb-8">{formTitle}</h2>
                {fields.map((field, index) => (
                    <div key={index} className="input-group">
                        <label htmlFor={field.name} className="mb-1">{field.label}:</label>
                        <input className="mb-2 p-2"
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            value={field.value}
                            onChange={onInputChange}
                            autoComplete="off"
                        />
                    </div>
                ))}
                <button type="submit"
                    className="bg-purple-700 mt-8 w-full text-white font-semibold rounded-lg p-2">
                    {buttonText}
                </button>
            </form>
        </div>
    )
}

export default User
