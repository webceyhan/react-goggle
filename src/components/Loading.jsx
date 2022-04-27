import {Puff} from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Puff type="Puff" color="#00BFFF" height={550} width={80} />
        </div>
    );
};
